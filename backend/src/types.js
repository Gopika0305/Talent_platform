import z from 'zod';


const Loginlist = z.object({ 
    username: z.string(),
    password: z.string(),
})

const Registerlist = z.object({
    firstname: z.string(),
    lastname: z.string(),
    username: z.string(),
    password:z.string(),
})


export { Loginlist , Registerlist }