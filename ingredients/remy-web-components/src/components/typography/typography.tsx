import { Component, h, Prop } from '@stencil/core';

enum Variant_ENUM {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  P = 'p',
  LINK = 'link',
}

@Component({ tag: 'remy-typography', styleUrl: 'typography.css', shadow: true })
export class TodoList {
  @Prop() variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'link';

  render() {
    return (
      <span
        class={{
          [Variant_ENUM.H1]: this.variant == Variant_ENUM.H1,
          [Variant_ENUM.H2]: this.variant == Variant_ENUM.H2,
          [Variant_ENUM.H3]: this.variant == Variant_ENUM.H3,
          [Variant_ENUM.H4]: this.variant == Variant_ENUM.H4,
          [Variant_ENUM.H5]: this.variant == Variant_ENUM.H5,
          [Variant_ENUM.H6]: this.variant == Variant_ENUM.H6,
          [Variant_ENUM.P]: this.variant == Variant_ENUM.P,
          [Variant_ENUM.LINK]: this.variant == Variant_ENUM.LINK,
        }}
      >
        <slot />
      </span>
    );
  }
}
