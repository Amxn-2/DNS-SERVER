import fs from 'fs';
import path from 'path';

// Process the bind zone file and return records
export async function processBindFile(filePath) {
    try {
        const data = await readFile(filePath);
        return parseZoneData(data);
    } catch (error) {
        console.error(`Error processing file ${filePath}:`, error);
        return [];
    }
}

// Read the file content (returning promise for async handling)
async function readFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
}

// Parse zone data and return a structured record
function parseZoneData(data) {
    const lines = data.split('\n');
    let records = [];

    lines.forEach(line => {
        // Remove comments and trim whitespace
        line = line.trim().replace(/;.*$/, '');
        if (!line) return;

        const parts = line.split(/\s+/);
        if (parts.length < 3) return;

        const [name, ttl, class_, type, ...recordData] = parts;

        switch (type) {
            case 'A':
                records.push(parseARecord(name, ttl, recordData));
                break;
            case 'CNAME':
                records.push(parseCNAMERecord(name, ttl, recordData));
                break;
            case 'MX':
                records.push(parseMXRecord(name, ttl, recordData));
                break;
            case 'SOA':
                records.push(parseSOARecord(name, ttl, recordData));
                break;
            default:
                // Add more types as needed
                break;
        }
    });

    return records;
}

// Parse A record
function parseARecord(name, ttl, data) {
    return {
        type: 'A',
        name,
        ttl: parseInt(ttl, 10),
        data: data.join(' ')  // IP address as string
    };
}

// Parse CNAME record
function parseCNAMERecord(name, ttl, data) {
    return {
        type: 'CNAME',
        name,
        ttl: parseInt(ttl, 10),
        data: data.join(' ')  // Canonical Name (CNAME)
    };
}

// Parse MX record
function parseMXRecord(name, ttl, data) {
    return {
        type: 'MX',
        name,
        ttl: parseInt(ttl, 10),
        preference: data[0],  // Priority of the mail exchange server
        data: data[1]         // Mail exchange server domain
    };
}

// Parse SOA record
function parseSOARecord(name, ttl, data) {
    return {
        type: 'SOA',
        name,
        ttl: parseInt(ttl, 10),
        mname: data[0],       // Primary name server
        rname: data[1],       // Responsible person's email address
        serial: data[2],      // Serial number
        refresh: data[3],     // Refresh interval
        retry: data[4],       // Retry interval
        expire: data[5],      // Expire time
        minimum: data[6]      // Minimum TTL
    };
}
