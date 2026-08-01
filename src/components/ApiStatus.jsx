import useApp from "../hooks/useApp";

const ApiStatus = () => {
  const { loading, error, content } = useApp();

  const { status } = content.common;

  if (loading) {
    return (
      <div
        role="status"
        className="bg-blue-50 py-3 text-center text-sm font-medium text-blue-700 dark:bg-blue-950 dark:text-blue-300"
      >
        {status.loading}
      </div>
    );
  }

  if (error) {
    return (
      <div
        role="alert"
        className="bg-red-50 py-3 text-center text-sm font-medium text-red-700 dark:bg-red-950 dark:text-red-300"
      >
        {status.error}
      </div>
    );
  }

  return null;
};

export default ApiStatus;
