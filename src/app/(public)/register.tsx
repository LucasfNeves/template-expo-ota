import { RegisterView } from '@/viewModels/Register/RegisterView';
import { useRegisterViewModel } from '@/viewModels/Register/useRegisterModel';

export default function RegisterPage() {
  const props = useRegisterViewModel();
  return <RegisterView {...props} />;
}
