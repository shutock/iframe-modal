import { Modal } from "../ui";
import * as Icons from "./icons";

type Props = {
  contractAddress: string;
};

const tabs = [
  {
    label: "Holders",
    section: "holders",
    Icon: Icons.Holders,
  },
  {
    label: "Transactions",
    section: undefined,
    Icon: Icons.Transactions,
  },
] as const;

export const ExplorerTabs: React.FC<Props> = ({ contractAddress }) => {
  const getUrl = (section?: string) => {
    const url = new URL(contractAddress, "https://tonviewer.com");
    section && url.searchParams.set("section", section);

    return url.toString();
  };

  return (
    <section className="flex gap-4 select-none p-4">
      {tabs.map(({ label, section, Icon }, id) => {
        const src = getUrl(section);

        return (
          <Modal.Root key={`${label}${id}`}>
            <Modal.Trigger className="flex flex-1 gap-1 items-center py-2 px-4 justify-center bg-gray-100 rounded-lg">
              <Icon className="fill-gray-600 h-6" />
              <span>{label}</span>
            </Modal.Trigger>
            <Modal.Content className="bg-[#ECEEF0] dark:bg-[#10161F] dark:text-white">
              <Modal.Title className="p-4 bg-white dark:bg-[#1D2633] flex justify-between">
                <div className="flex items-center gap-2">
                  <Icon className="fill-[#7D868F] dark:fill-[#8994A3] h-6" />
                  <span>{label}</span>
                </div>
                <Modal.Close className="h-6 w-6 z-20 relative">
                  <Icons.Cross className="fill-[#7D868F] dark:fill-[#8994A3]" />
                </Modal.Close>
              </Modal.Title>
              <iframe
                {...{ src }}
                className="border-none flex-1 relative z-10"
              />
              <div className="absolute inset-0 grid place-items-center gap-2">
                <Icons.Spinner className="h-8 animate-spin fill-[#7D868F] dark:fill-[#8994A3]" />
              </div>
            </Modal.Content>
          </Modal.Root>
        );
      })}
    </section>
  );
};
