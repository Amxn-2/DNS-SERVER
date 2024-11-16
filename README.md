
# DNS Server Implementation with Node.js

This project demonstrates a simple DNS server implementation using Node.js. It handles DNS queries and resolves them to appropriate IP addresses.

## Features:
- Handles DNS A, AAAA, MX, TXT, and CNAME record queries (or any other record types your server supports).
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

