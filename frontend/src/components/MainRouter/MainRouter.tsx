import { type FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AddEvent,
  EditEvent,
  EditUser,
  EditVisitor,
  Events,
  EventVisitors,
  Footer,
  Header,
  Home,
  Login,
  NotFoundPage,
  RegisterNewUser,
  RegisterNewVisitor,
  RequireAdmin,
  RequireAuth,
  Users,
  Visitors,
} from "..";

export const MainRouter: FC = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/home"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="/events"
          element={
            <RequireAuth>
              <Events />
            </RequireAuth>
          }
        />
        <Route
          path="/events/add-event"
          element={
            <RequireAuth>
              <AddEvent />
            </RequireAuth>
          }
        />
        <Route
          path="/events/edit-event/:id"
          element={
            <RequireAuth>
              <EditEvent />
            </RequireAuth>
          }
        />
        <Route
          path="/visitors"
          element={
            <RequireAuth>
              <Visitors />
            </RequireAuth>
          }
        />
        <Route
          path="/visitors/register"
          element={
            <RequireAuth>
              <RegisterNewVisitor />
            </RequireAuth>
          }
        />
        <Route
          path="/visitors/edit-visitor/:id"
          element={
            <RequireAuth>
              <EditVisitor />
            </RequireAuth>
          }
        />

        <Route
          path="/events/event-visitors/:id"
          element={
            <RequireAuth>
              <EventVisitors />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFoundPage />} />

        <Route
          path="/users"
          element={
            <RequireAdmin>
              <Users />
            </RequireAdmin>
          }
        />
        <Route
          path="/admin/register-user"
          element={
            <RequireAdmin>
              <RegisterNewUser />
            </RequireAdmin>
          }
        />
        <Route
          path="/admin/edit-user/:id"
          element={
            <RequireAdmin>
              <EditUser />
            </RequireAdmin>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};
