import React from 'react'

type FormProps<FormSchema> = {
  children: React.ReactNode
  onSubmit: (data: FormSchema) => void | Promise<void>
}

export function Form<T>({ children, onSubmit }: FormProps<T>) {
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { target } = event

    const formData: any[] = new FormData(
      target as HTMLFormElement
    ) as unknown as Array<any>

    const formSchema = Object.fromEntries(formData) as T

    return await onSubmit(formSchema)
  }

  return <form onSubmit={handleFormSubmit}>{children}</form>
}
