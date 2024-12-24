import z from 'zod';


const Network = z.object({ 
    name: z.string(),
    description: z.string(),
})

const Register = z.object({
    firstname: z.string(),
    lastname: z.string(),
    username: z.string(),
    password:z.string(),
})


export { Network, Register }