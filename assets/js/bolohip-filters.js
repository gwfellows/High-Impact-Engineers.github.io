document.addEventListener('DOMContentLoaded', function() {
    // Initialize the filter function
    window.filterProjects = function() {
        const searchText = document.getElementById('projectSearch').value.toLowerCase();
        const statusFilter = document.getElementById('statusFilter').value;
        const selectedCauseAreas = Array.from(document.querySelectorAll('.cause-area-checkbox:checked')).map(checkbox => checkbox.value);
        const projects = document.getElementsByClassName('bolohip-item');

        console.log('Selected cause areas:', selectedCauseAreas); // Debug log

        for (let project of projects) {
            const title = project.getAttribute('data-title');
            const description = project.getAttribute('data-description');
            const status = project.getAttribute('data-status');
            const causeAreas = project.getAttribute('data-cause-areas').split(' ');

            console.log('Project cause areas:', causeAreas); // Debug log

            const matchesSearch = title.includes(searchText) || description.includes(searchText);
            const matchesStatus = !statusFilter || status === statusFilter;
            const matchesCauseArea = selectedCauseAreas.length === 0 || selectedCauseAreas.some(area => causeAreas.includes(area));

            project.style.display = matchesSearch && matchesStatus && matchesCauseArea ? 'block' : 'none';
        }
    };

    // Add event listeners
    const checkboxes = document.querySelectorAll('.cause-area-checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterProjects);
    });

    // Initial filter
    filterProjects();
});