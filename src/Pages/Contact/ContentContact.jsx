import { FaPhoneAlt } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaFax } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function ContentContact() {
  return (
    <>
    <div className="flex items-center gap-4">
    <FaPhoneAlt class="text-text-secondary text-[21px]" />
    <div className="flex gap-2 flex-col">
      <p className="m-0 p-0 text-[14px]">Phone</p>
      <p className="text-text-secondary p-0 m-0 text-[15px]">
        +123-456-789
      </p>
    </div>
  </div>
  <div className="flex items-center gap-4">
    <FaMobileAlt class="text-text-secondary text-[21px]" />
    <div className="flex gap-2 flex-col">
      <p className="m-0 p-0 text-[14px]">Mobile</p>
      <p className="text-text-secondary p-0 m-0 text-[15px]">
        +123-456-789
      </p>
    </div>
  </div>
  <div className="flex items-center gap-4">
  <FaFax  class="text-text-secondary text-[21px]" />
  <div className="flex gap-2 flex-col">
    <p className="m-0 p-0 text-[14px]">Fax</p>
    <p className="text-text-secondary p-0 m-0 text-[15px]">
      +123-456-789
    </p>
  </div>
</div>
<div className="flex items-center gap-4">
<MdEmail  class="text-text-secondary text-[21px]" />
<div className="flex gap-2 flex-col">
  <p className="m-0 p-0 text-[14px]">Email</p>
  <p className="text-text-secondary p-0 m-0 text-[15px]">
  hello@realhouse.com
  </p>
</div>
</div>
<div className="flex items-center gap-4">
<FaLocationDot class="text-text-secondary text-[21px]" />
<div className="flex gap-2 flex-col">
<p className="m-0 p-0 text-[14px]">Address</p>
<p className="text-text-secondary p-0 m-0 text-[15px]">
3015 Grand Ave, Coconut Grove, Merrick Way, FL 12345
</p>
</div>
</div>
    </>
  )
}
