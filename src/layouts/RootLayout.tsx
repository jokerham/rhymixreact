// src/components/Layout/LayoutHandler.tsx
import React, { Suspense, useMemo } from "react";

export type WidgetType = "module" | "html" | "component";

export interface WidgetInstance {
  id: string;
  type: WidgetType;
  module?: string;
  action?: string;
  componentName?: string;
  content?: string;
  config?: Record<string, unknown>;
  data?: unknown;
}

export interface SlotMeta {
  id: string;
  widgets: WidgetInstance[];
}

export interface RegionMeta {
  id: string;
  slots: string[];
}

export interface LayoutMeta {
  id: string;
  name: string;
  template: string;
  regions: RegionMeta[];
  slots: SlotMeta[];
  settings?: Record<string, string | number>;
}

interface LayoutHandlerProps {
  layoutMeta: LayoutMeta;
  pageData?: unknown;
  widgetRegistry?: Record<string, React.ComponentType<WidgetRenderProps>>;
}

export interface WidgetRenderProps {
  widget: WidgetInstance;
  pageData?: unknown;
}

function HtmlWidget({ widget }: WidgetRenderProps) {
  return (
    <div
      data-widget-id={widget.id}
      dangerouslySetInnerHTML={{ __html: widget.content ?? "" }}
    />
  );
}

function UnknownWidget({ widget }: WidgetRenderProps) {
  return (
    <div data-widget-id={widget.id} style={{ padding: 12, border: "1px dashed #ccc" }}>
      Unknown widget: {widget.componentName ?? widget.module ?? widget.type}
    </div>
  );
}

function WidgetRenderer({
  widget,
  pageData,
  widgetRegistry = {},
}: WidgetRenderProps & {
  widgetRegistry?: Record<string, React.ComponentType<WidgetRenderProps>>;
}) {
  if (widget.type === "html") {
    return <HtmlWidget widget={widget} pageData={pageData} />;
  }

  const key =
    widget.componentName ??
    [widget.module, widget.action].filter(Boolean).join(".");

  const Component = key ? widgetRegistry[key] : undefined;

  if (!Component) {
    return <UnknownWidget widget={widget} pageData={pageData} />;
  }

  return <Component widget={widget} pageData={pageData} />;
}

function Slot({
  slotId,
  widgets,
  pageData,
  widgetRegistry,
}: {
  slotId: string;
  widgets: WidgetInstance[];
  pageData?: unknown;
  widgetRegistry?: Record<string, React.ComponentType<WidgetRenderProps>>;
}) {
  return (
    <div data-slot-id={slotId}>
      {widgets.map((widget) => (
        <Suspense key={widget.id} fallback={<div>Loading...</div>}>
          <WidgetRenderer
            widget={widget}
            pageData={pageData}
            widgetRegistry={widgetRegistry}
          />
        </Suspense>
      ))}
    </div>
  );
}

export default function LayoutHandler({
  layoutMeta,
  pageData,
  widgetRegistry = {},
}: LayoutHandlerProps) {
  const slotMap = useMemo(() => {
    return new Map(layoutMeta.slots.map((slot) => [slot.id, slot]));
  }, [layoutMeta.slots]);

  const cssVariables = useMemo(() => {
    return Object.fromEntries(
      Object.entries(layoutMeta.settings ?? {}).map(([key, value]) => [
        `--layout-${key}`,
        String(value),
      ])
    ) as React.CSSProperties;
  }, [layoutMeta.settings]);

  return (
    <div
      data-layout-id={layoutMeta.id}
      data-layout-template={layoutMeta.template}
      style={cssVariables}
    >
      {layoutMeta.regions.map((region) => (
        <section key={region.id} data-region-id={region.id}>
          {region.slots.map((slotId) => {
            const slot = slotMap.get(slotId);

            if (!slot) {
              return null;
            }

            return (
              <Slot
                key={slot.id}
                slotId={slot.id}
                widgets={slot.widgets}
                pageData={pageData}
                widgetRegistry={widgetRegistry}
              />
            );
          })}
        </section>
      ))}
    </div>
  );
}