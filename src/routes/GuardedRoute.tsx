import { Navigate, Outlet } from "react-router-dom";

interface GuardRouteProps {
  isRouteAccessible: boolean;
  redirectRoute: string;
}
const GuardRoute = ({
  isRouteAccessible,
  redirectRoute,
}: GuardRouteProps): JSX.Element =>
  isRouteAccessible ? <Outlet /> : <Navigate to={redirectRoute} />;

export default GuardRoute;
