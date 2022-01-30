import React from 'react'

type Key = string | number

type DataTypeWithKey<DataType> = DataType & {
  key: Key
}

export type ListProps<DataType> = {
  data: DataType[]
  keyExtractor: (data: DataType) => Key
  children: (data: DataTypeWithKey<DataType>, index: number) => JSX.Element
}

export const List = <DataType extends {}>({
  data,
  children,
  keyExtractor,
}: ListProps<DataType>) => {
  return (
    <React.Fragment>
      {data.map(({ ...data }, index) =>
        children({ key: keyExtractor(data), ...data }, index)
      )}
    </React.Fragment>
  )
}
