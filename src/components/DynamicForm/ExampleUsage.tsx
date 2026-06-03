import DynamicForm from './DynamicForm';
import { sampleFormConfig } from './sampleConfig';
import type { FetcherMap } from './types';

// Simple mock fetchers — replace with real storage/API calls
const fetchers: FetcherMap = {
  roles: async () => {
    return [
      { label: 'Editor', value: 'editor' },
      { label: 'Moderator', value: 'moderator' },
      { label: 'Administrator', value: 'admin' },
    ];
  },
};

export default function ExampleUsage() {
  const handlers = {
    saveUser: async (values: Record<string, unknown>) => {
      console.log('Save user', values);
      alert('Saved: ' + JSON.stringify(values));
    },
    cancel: () => {
      console.log('Cancelled');
      alert('Cancelled');
    },
  };

  return (
    <div style={{ maxWidth: 700 }}>
      <DynamicForm
        config={sampleFormConfig}
        fetchers={fetchers}
        actionHandlers={handlers}
        onFieldChange={(name, value, _full) => console.log('field change', name, value)}
        onChange={(v) => console.log('form change', v)}
      />
    </div>
  );
}
