// nhap font chu Inter from next/font/google module
import { Inter,Lusitana  } from 'next/font/google';

// load tieng latin
export const inter = Inter({ subsets: ['latin'] })
export const lusitana = Lusitana({
    weight:['400','700'],
    subsets:['latin'],
})
