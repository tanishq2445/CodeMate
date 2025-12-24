import {io} from 'socket.io-client';

export const initSocket = async () => {
    const options = {
        'force new connection': true,
        reconnectionAttempt: 'Infinity',
        timeout: 10000,
        transports: ['websocket'],
    };

    // Use the correct backend URL (port 5001)
    const backendUrl = 'http://localhost:5001';

    return io(backendUrl, options);
};