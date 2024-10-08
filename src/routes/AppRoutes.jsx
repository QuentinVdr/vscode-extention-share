import ExtensionDetails from '@pages/ExtensionDetails/ExtensionDetails';
import Home from '@pages/Home/Home';
import { NotFound } from '@pages/NotFound/NotFound';
import SavedExtensionDetails from '@pages/SavedExtensionDetails/SavedExtensionDetails';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './components/Layout';

/**
 * Componant to handle all the routes of the application
 */
export const AppRouter = () => (
  <RouterProvider
    router={createBrowserRouter(
      createRoutesFromElements(
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/extension-details" element={<ExtensionDetails />} />
          <Route path="/extension-details/:id" element={<SavedExtensionDetails />} />
          <Route path="/not-found" element={<NotFound />} />
          {/** Unknown path redirection */}
          <Route path="*" element={<NotFound />} />
        </Route>
      )
    )}
  />
);
