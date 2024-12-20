
# DNS Server Implementation with Node.js

This project demonstrates a simple DNS server implementation using Node.js. It handles DNS queries and resolves them to appropriate IP addresses.

## Features:
- Handles DNS A, AAAA, MX, TXT, and CNAME record queries.
- Supports basic DNS functionality.
- Easy to deploy and customize.


### Installation:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Amxn-2/dns-server.git
   cd dns-server
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the server:**

   ```bash
   node index.js
   ```

   The DNS server will now be running locally.

### Usage:

You can test the DNS server by running queries like:

```bash
dig @127.0.0.1 example.com
```

### License:
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Resources:
 - [Medium Article](https://medium.com/@amansharmaa1205/8ed54d17b3d1)
 - [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034)
 - [RFC 1035](https://datatracker.ietf.org/doc/html/rfc1035)