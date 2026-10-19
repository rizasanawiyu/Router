import {NavLink, useLocation} from 'react-router-dom'

function Breadcrumb(){
    const location = useLocation();
    const segments = location.pathname.split('/').filter(Boolean)

    const items = [{label: 'Utama', to:'/'}]

    if(segments[0] === 'users'){
        items.push({label: 'List User', to: '/'})
    }

  if (segments[1]) {
    items.push({
      label: `User ${segments[1]}`,
      to: `/users/${segments[1]}`,
    });
  }

  if (segments[2] === "posts") {
    items.push({
      label: "Post User",
      to: `/users/${segments[1]}/posts`,
    });
  }

  if (segments[3] && segments[4] === "edit") {
    items.push({
      label: `Edit Post ${segments[3]}`,
      to: location.pathname,
    });
  }

  if (segments[2] === "comments") {
    items.push({
      label: "Comment User",
      to: location.pathname,
    });
  }

  return (
    <nav aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`}>
          {index > 0 && " > "}

          <NavLink
            to={item.to}
            end
            style={({ isActive }) => ({
              color: isActive ? "#2563eb" : "#555",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            {item.label}
          </NavLink>
        </span>
      ))}
    </nav>
  );
}

export default Breadcrumb