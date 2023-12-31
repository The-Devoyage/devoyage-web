---
id: license-key
title: License Key
---

import {LicenseAlert} from '@site/src/components/common/docs';

## Evaluation Version with Optional Licensing

Experience the software by downloading and initiating it for a trial period. No license key is necessary to utilize Subgraph in its "demo" mode.

In "demo" mode, the service operates without restrictions for a duration of 20 minutes. After the expiration of this time limit, you have the option to restart the service for an additional twenty minutes.

For uninterrupted usage without time constraints, you may acquire a license key. Simply utilize the `license_key` property in the configuration file to integrate your purchased key:

```toml
[service]
name = "my_service"
license_key = "YOUR_PURCHASED_KEY"
```

<LicenseAlert product="subgraph" to="https://thedevoyage.gumroad.com/l/subgraph" message="Subgraph Pre-Alpha Release!" btnTxt="Purchase License" />
