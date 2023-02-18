import React, { ReactNode } from 'react';
import { Button } from 'shared/ui/Button/Button';

interface BugButtonProps {
  className?: string;
  children?: ReactNode
}

export const BugButton: React.FC<BugButtonProps> = (props: BugButtonProps) => {
  const [error, setError] = React.useState(false)

  const onThrow = () => setError(true)

  React.useEffect(() => {
    if (error) throw new Error();
  }, [error])

  return (
    <Button onClick={onThrow}>
      throw Error
    </Button>
  );
};
