import React from 'react';

function Dashboard() {
    return (
      <div>
        <h1>Chez vous, partout et ailleurs</h1>
  
        {/* This element will render either <DashboardMessages> when the URL is
            "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
        */}
        <Layout />
      </div>
    );
  }
  
  function App() {
    return (
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route
            path="messages"
            element={<DashboardMessages />}
          />
          <Route path="tasks" element={<DashboardTasks />} />
        </Route>
      </Routes>
    );
  }

  export default Layout;