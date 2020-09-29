This config is the eslint config you should use for all blackfoot react project in typescript.

We recommand you to add these rules for a better typescript support.

```json
{
  "extends": [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
}
```