import React from 'react';
import { Badge} from './Badge/Badge';
import { Button } from "./Button/Button";

const BadgeButton = props => {
  const { todos } = props;
  let count = 0;

  for (let i = 0; i < Object.keys(todos).length; i += 1) {
    if (Object.values(todos)[i].viewed === 'false') count += 1;
  }

  return (
    <div>
      <Button label="ll">
      <p>Time Remaining</p>
        {/* Replace the below line with seconds from a timer */}
        {/* <Badge>{count}</Badge> */}
        <Badge>
          47 Hours
          </Badge> 


      </Button>
    </div>
  );
};

export default BadgeButton;
