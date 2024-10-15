import React, { Suspense } from "react";
import * as Icons from "lucide-react"; // Importing all icons for dynamic icon loading

const loadComponent = (componentName) => {
  return React.lazy(() =>
    import(`./components/${componentName}`).catch(() => ({
      default: () => <div>Component {componentName} not found</div>,
    }))
  );
};
const loadIcon = (iconName) => {
  const IconComponent = Icons[iconName];
  return IconComponent ? <IconComponent /> : null;
};

const SidebarItem = ({ label, icon, onClick }) => (
  <div onClick={onClick} className="sidebar-item">
    {loadIcon(icon)}
    <span>{label}</span>
  </div>
);

export default SidebarItem;
