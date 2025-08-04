import { getServers } from 'dns';
import * as core from '@actions/core';

async function checkDNSConfiguration(): Promise<void> {
    try {
        const servers = getServers();

        servers.forEach(s => {
            core.info(`DNS Server: ${s}`);
        });
    } catch (error) {
        core.error("Error:", error);
    }
}

checkDNSConfiguration();
