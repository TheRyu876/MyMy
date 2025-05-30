<script>
    const form = document.getElementById('searchForm');
    const input = document.getElementById('searchInput');
    const items = document.querySelectorAll('.search-item');

    form.addEventListener('submit', function(e) {
      e.preventDefault(); // prevent the page from reloading
      const keyword = input.value.toLowerCase();

      items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(keyword)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  </script>