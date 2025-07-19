import { useAuthStore } from "@/store/auth";

export const Dashboard = () => {
  const { user } = useAuthStore();

  return (
    <>
      {user?.role === "ADMIN" ? (
        <h1>Admin Dashboard</h1>
      ) : (
        <h1>User Dashboard</h1>
      )}
    </>
  );
};
