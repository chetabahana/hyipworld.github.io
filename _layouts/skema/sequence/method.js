{% assign object_path = page.path | split: '/' | pop | pop | push: page.event | join: '/'  | append: '/' %}{% assign object_items = site.assets | where_exp:"item", "item.path contains object_path" %}{{ object_items[page.from].label }}{% unless page.type == null %}{% if page.type == "internal" %}->>{% else %}-->{% endif %}{% endunless %}{{ object_items[page.to].label }}: {{ page.label }}{{ page.type }}