export const getListsByBoardId = ( boards: { [ x: string ]: any }, boardID: string | number ) => {
  const board = boards[ boardID ]
  const lists = board.lists
  return lists
}
