import { Check, X } from 'lucide-react'
 export const PasswordCriteria =({password})=>{
    const criteria =[
        {label:"At least 6 Characters",met:password.length >=6},
        {label:"Contains uppercase letter",met: /[A-Z]/.test(password)},
        {label:"Contains lowercase letter",met: /[a-z]/.test(password)},
        {label:"Contains a number",met: /\d/.test(password)},
        {label:"Contains spacial character",nmet: /[^A-Za-z0-9]/.test(password)}
    ]
    return (
        <div className='mt-2 space-y-1'>
            {criteria.map((item)=>(
                <div key={item.label} className='flex items-center text-xs'>
                    {item.met? (
                       <Check className='size-4 text-green-500 mr-2'/> 
                    ) :(
                        <X className='size-4 text-gray-500 mr-2'/>
                    )}

                    <span className={item.met? "text-green-500" : "text-gray-500"}>
                         {item.label}
                    </span>
                </div>
            ))}
    
        </div>
      )
}