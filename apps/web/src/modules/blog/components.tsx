import { Heading, Text } from '@giffy/ui'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export const components: Record<string, React.ReactNode> = {
  h1: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >
  ) => <Heading variant="h1" as="h1" {...props} />,
  h2: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >
  ) => <Heading variant="h2" as="h2" {...props} />,
  h3: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >
  ) => <Heading variant="h3" as="h3" {...props} />,
  p: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    >
  ) => <Text {...props} />,
}
