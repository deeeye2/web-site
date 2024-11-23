document.addEventListener("DOMContentLoaded", () => {
  const toolbarLinks = document.querySelectorAll(".nav-links a");
  const sidebar = document.getElementById("sidebar");
  const sidebarContent = document.getElementById("sidebar-content");

  // Sidebar data for each section
  const sidebarData = {
    documentation: [
      { name: "Installation", links: ["Uninstall", "Upgrade"] },
      { name: "Configuration Files", links: ["Writing Config Files", "Best Practices"] },
    ],
    features: [
      { name: "Overview", links: ["Multi-Cloud Support", "Monitoring"] },
      { name: "Automation", links: ["YAML-Based Scripts", "API Integration"] },
    ],
    community: [
      { name: "Join Us", links: ["Slack", "GitHub"] },
      { name: "Contribute", links: ["Submit a PR", "Report Issues"] },
    ],
    blog: [
      { name: "Latest Posts", links: ["Release Notes", "Tutorials"] },
    ],
    about: [
      { name: "Our Mission", links: ["Team", "History"] },
      { name: "Contact", links: ["Email", "Support"] },
    ],
  };

  // Function to populate the sidebar
  const populateSidebar = (section) => {
    sidebarContent.innerHTML = ""; // Clear previous content
    if (sidebarData[section]) {
      sidebarData[section].forEach((item) => {
        const listItem = document.createElement("li");
        const title = document.createElement("h4");
        title.innerText = item.name;
        listItem.appendChild(title);

        const subList = document.createElement("ul");
        item.links.forEach((link) => {
          const subListItem = document.createElement("li");
          const subLink = document.createElement("a");
          subLink.href = "#"; // Placeholder link
          subLink.innerText = link;
          subListItem.appendChild(subLink);
          subList.appendChild(subListItem);
        });

        listItem.appendChild(subList);
        sidebarContent.appendChild(listItem);
      });
    }
  };

  // Event listener for toolbar links
  toolbarLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const section = link.dataset.section;
      populateSidebar(section);
      sidebar.style.display = "block"; // Show the sidebar
    });
  });

  // Optional: Close sidebar on outside click
  document.addEventListener("click", (event) => {
    if (!sidebar.contains(event.target) && !event.target.closest(".nav-links")) {
      sidebar.style.display = "none"; // Hide the sidebar
    }
  });
});

  