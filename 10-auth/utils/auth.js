import { hash, compare } from 'bcryptjs';

export async function hashPass(pass) {
  return await hash(pass, 12);
}

export async function checkPass(pass, hash) {
  return await compare(pass, hash);
}