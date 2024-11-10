document.addEventListener("DOMContentLoaded", () => {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        const container = document.querySelector('#dynamic-content'); // Add an ID or use an existing element for insertion.

        data.forEach(topic => {
          const detailsElement = document.createElement('details');
          const summaryElement = document.createElement('summary');
          summaryElement.textContent = topic.title;
          detailsElement.appendChild(summaryElement);

          // Create Most Requested section
          const mostRequestedSection = createSection("Most requested", topic.mostRequested);
          detailsElement.appendChild(mostRequestedSection);

          // Create More Topics section
          const moreTopicsSection = createSection("More topics", topic.otherTopics);
          detailsElement.appendChild(moreTopicsSection);

          container.appendChild(detailsElement);
        });
      })
      .catch(error => console.error('Error fetching JSON:', error));

    function createSection(headerText, items) {
      const section = document.createElement('section');
      section.className = "mrgn-tp-lg mrgn-bttm-0 well well-sm brdr-0";
      section.style.padding = "20px 0 0";

      const containerDiv = document.createElement('div');
      containerDiv.className = "container";

      const rowDiv = document.createElement('div');
      rowDiv.className = "row";

      const colHeaderDiv = document.createElement('div');
      colHeaderDiv.className = "col-md-3";
      const h3 = document.createElement('h3');
      h3.className = "mrgn-tp-sm";
      h3.textContent = headerText;
      colHeaderDiv.appendChild(h3);

      const colListDiv = document.createElement('div');
      colListDiv.className = "col-md-9";
      const ul = document.createElement('ul');
      ul.className = "mrgn-tp-0 mrgn-bttm-md colcount-md-2 li-mrgn-lft-0 mrgn-rght-lg";
      items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
      });
      colListDiv.appendChild(ul);

      rowDiv.appendChild(colHeaderDiv);
      rowDiv.appendChild(colListDiv);
      containerDiv.appendChild(rowDiv);
      section.appendChild(containerDiv);

      return section;
    }
  });