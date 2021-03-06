import type { ChangeEvent } from 'react';

import type { TaskModel } from '../../../../domain/models/task-model';
import { useChangeDoneHandler, useClickDeleteHandler } from './hook';
import * as Styled from './style';

type ContainerProps = TaskModel;

type Props = {
  handleChangeDone(e: ChangeEvent<HTMLInputElement>): void;
  handleClickDelete(): void;
} & ContainerProps;

export const View: React.VFC<Props> = (props) => {
  const id = `item_${props.id}`;

  return (
    <Styled.LI>
      <Styled.Input
        type="checkbox"
        id={id}
        checked={props.done}
        onChange={props.handleChangeDone}
      />
      <Styled.Label htmlFor={id}>{props.title}</Styled.Label>
      <Styled.Button type="button" onClick={props.handleClickDelete}>
        Delete
      </Styled.Button>
    </Styled.LI>
  );
};

export const TaskLI: React.VFC<ContainerProps> = (props) => {
  const handleChangeDone = useChangeDoneHandler(props.id, props.title);
  const handleClickDelete = useClickDeleteHandler(props.id, props.title);

  return (
    <View
      {...props}
      handleChangeDone={handleChangeDone}
      handleClickDelete={handleClickDelete}
    />
  );
};
