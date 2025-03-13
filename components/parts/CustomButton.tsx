// components/parts/CustomButton.tsx

import React, { useState } from 'react';
import { Button, ButtonProps } from '@mui/material';

interface CustomButtonProps extends ButtonProps {
  variantType?: 'primary' | 'secondary' | 'danger' | 'warning' | 'info' | 'success';
}

const CustomButton: React.FC<CustomButtonProps> = ({ variantType = 'primary', ...props }) => {

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 300);
  }



  let color: ButtonProps['color'] = 'primary';

  if (variantType === 'secondary') {
    color = 'secondary';
  } else if (variantType === 'danger') {
    color = 'error';
  } else if (variantType === "warning") {
    color = 'warning';
  } else if (variantType === "info") {
    color = 'info';
  } else if (variantType === "success") {
    color = 'success';
  }

  return (
    <Button
      color={color}
      variant="contained"{...props}
      sx={{
        transition: 'transform 0.3s ease',
        transform: clicked ? 'scale(0.90)' : 'scale(1)',
        '&:active': {
          transform: 'scale(0.90)',
        },
      }}
    >{props.children}
    </Button>
  )
}

export default CustomButton