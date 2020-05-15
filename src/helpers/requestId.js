import { customAlphabet } from 'nanoid';

const requestId = () => customAlphabet('23456789ABCDEFGHJKMNPQRSTUVWXYZ', 6)();

export default requestId;
