const MenuLinksLabel: string[] = [
  'Find a store',
  'Become a partner',
  'Sign up for email',
  'Send us feedback',
  'Student discount',
];

const MenuRow1: string[] = ['Order Status', 'Delivery', 'Returns', 'Payment Options', 'Contact Us'];

const MenuRow2: string[] = ['News', 'Careers', 'Investors', 'Sustainability'];

export function UtilLinks() {
  return (
    <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
      <div className="flex flex-col gap-3 shrink-0">
        {MenuLinksLabel.map((item) => (
          <div key={item} className="font-oswald font-medium uppercase text-sm cursor-pointer">
            {item}
          </div>
        ))}
      </div>

      <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
        <div className="flex flex-col gap-3">
          <div className="font-oswald font-medium uppercase text-sm">get help</div>
          {MenuRow1.map((item) => (
            <div key={item} className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
              {item}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <div className="font-oswald font-medium uppercase text-sm">About nike</div>
          {MenuRow2.map((item) => (
            <div key={item} className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
