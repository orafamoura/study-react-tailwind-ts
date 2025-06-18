'use client';

import React from 'react';

/*interface ButtonProps { aqui tenho que declarar todos os atributos
    children: React.ReactNode;
}*/

type ButtonProps = React.ComponentPropsWithoutRef<"button"> // dessa forma ele aceita todos os atributos nativos de um button

const Button = ({children}: ButtonProps) => {  
  return <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline shadow-xl/20">{children}</button>
;
};

export default Button;
