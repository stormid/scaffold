# Aliases

Set in `tools\webpack\config\base\main.js`.

Default aliases define paths to comomonly used HTML template directories:

```
@templates': path.join(process.cwd(), 'src/templates/'),
'@layouts': path.join(process.cwd(), 'src/templates/layouts'),
'@components': path.join(process.cwd(), 'src/templates/components')
```

Allows importing of components without a relative or absolute path, e.g.

```
import Card from @components/Card
```