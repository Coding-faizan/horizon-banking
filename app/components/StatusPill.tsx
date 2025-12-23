import { capitalize } from '@/lib/utils';

export function StatusPill({
  status,
}: {
  status: 'processing' | 'success' | 'declined';
}) {
  const styles = {
    processing: 'bg-gray-100 text-gray-700',
    success: 'bg-green-100 text-green-700',
    declined: 'bg-error-50 text-error-700',
  };

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ${styles[status]}`}
    >
      <span className="h-2 w-2 rounded-full bg-current" />
      {capitalize(status)}
    </span>
  );
}
