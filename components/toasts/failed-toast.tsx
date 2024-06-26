import { XCircle } from "lucide-react";
import { toast } from "sonner";

const failedToast = () => {
  toast.error("Failed... please try again!", {
    icon: <XCircle className="w-4 h-4 text-red-500" />,
  });
};

export default failedToast;
