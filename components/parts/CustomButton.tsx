// components/parts/CustomButton.tsx

import React from 'react';
import { Button, ButtonProps } from '@mui/material';

interface CustomButtonProps extends ButtonProps {
  variantType?: 'primary' | 'secondary' | 'danger';
}

const CustomButton: React.FC<CustomButtonProps> = ({ variantType = 'primary', ...props }) => {
  let color: ButtonProps['color'] = 'primary';

    if (variantType === 'secondary') {
        color = 'secondary';
      } else if (variantType === 'danger') {
        color = 'error';
      }
	
  return (
    <Button color={color} variant="contained"{...props}>{props.children}</Button>
  )
}

export default CustomButton