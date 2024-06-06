"use client";

import { ComponentProps } from "react";
import { Drawer } from "vaul";
import { clsx } from "clsx";

export const Root = Drawer.Root;
export const NestedRoot = Drawer.NestedRoot;
export const Close = Drawer.Close;
export const Title = Drawer.Title;
export const Description = Drawer.Description;
export const Trigger = Drawer.Trigger;

type Props = ComponentProps<typeof Drawer.Content> &
  ComponentProps<typeof Drawer.Portal>;

export const Content: React.FC<Props> = ({
  children,
  className,
  forceMount,
  container,
  ...props
}) => {
  return (
    <Drawer.Portal {...{ forceMount, container }}>
      <Drawer.Overlay className={`fixed inset-0 bg-black bg-opacity-40`} />
      <Drawer.Content
        className={clsx(
          `flex fixed flex-col inset-x-0 bottom-0 bg-gray-900 rounded-t-lg h-[96svh] overflow-hidden`,
          className
        )}
        {...props}
      >
        {children}
      </Drawer.Content>
    </Drawer.Portal>
  );
};
