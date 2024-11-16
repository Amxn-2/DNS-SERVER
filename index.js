import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current directory of the script
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to your zone file
const zoneFilePath = path.join(__dirname, '/zone/example.zone');

// Function to read the zone file
function readZoneFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(`Error reading zone file: ${err}`);
            } else {
                resolve(data);
            }
        });
    });
}

// Function to parse the zone file data
function parseZoneData(zoneData) {
    // Process the zone data (you can adjust this based on your zone file format)
    console.log('Parsing zone data...');
    // Example: Split the file into individual lines (just a simple parser)
    const lines = zoneData.split('\n');
    const records = [];

    lines.forEach(line => {
        if (line && !line.startsWith(';')) { // Ignore empty lines and comments
            const parts = line.split(/\s+/);
            const record = {
                name: parts[0],
                ttl: parts[1],
                class: parts[2],
                type: parts[3],
                value: parts.slice(4).join(' '), // Join any additional parts as the record value
            };
            records.push(record);
        }
    });

    return records;
}

// Read the zone file and process its contents
async function processZoneFile() {
    try {
        const zoneData = await readZoneFile(zoneFilePath);
        console.log('Zone file data:', zoneData);
        
        // Parse the zone data
        const records = parseZoneData(zoneData);
        console.log('Parsed zone records:', records);

        // You can now use the parsed zone records as needed
        // For example, store them in a database, process them further, etc.

    } catch (error) {
        console.error(error);
    }
}

// Start processing the zone file
processZoneFile();
