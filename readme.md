# Universal Environment Variables

Safe, universal environment variables in 3 easy steps 😬.


## 1. Define what to share

Do this early in the application's lifecycle.

```
import { share } from "@lds/universal-env";

share("NODE_ENV", "GRAPHQL_ENDPOINT");
```


## 2. Populate a script tag in the document template

Add as script tag when generating the document. The script function returns a string of javascript.

```
import { script } from "@lds/universal-env";
<script>{script()}</script>
```


## 3. Access shared variables.

```
import { get } from "@lds/universal-env";

const { NODE_ENV, GRAPHQL_ENDPOINT } = get();
```

