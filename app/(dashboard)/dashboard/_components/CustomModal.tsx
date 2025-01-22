import FormControl from '@/components/common/FormControl';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

type ModalProps = {
  open: boolean;
  onChange: (open: boolean) => void;
  purpose: 'edit' | 'delete';
};

export default function CustomModal({ open, onChange, purpose }: ModalProps) {
  return (
    <Dialog open={open} onOpenChange={onChange}>
      {purpose === 'edit' ? (
        <DialogContent aria-describedby={'modal edit'} className="sm:max-w-[40rem] text-text">
          <DialogHeader>
            <DialogTitle>Edit User</DialogTitle>
          </DialogHeader>
          <form className="grid gap-4 py-4">
            <FormControl
              className="p-2 border bg-transparent"
              as="input"
              labelText="Full Name"
            />
            <FormControl
              className="p-2 border bg-transparent"
              as="input"
              labelText="Email"
            />
            <FormControl
              as="select"
              labelText="Assign Role"
              className="p-2 bg-transparent"
              options={[
                { label: 'Admin', value: 'admin' },
                { label: 'Role1', value: 'role1' },
                { label: 'Role2', value: 'role2' },
                { label: 'Role3', value: 'role3' },
                { label: 'Role4', value: 'role4' },
              ]}
            />
          </form>
          <DialogFooter>
            <Button
              className="min-w-28 text-white"
              variant={'outline'}
              type="button"
            >
              Cancel
            </Button>
            <Button
              className="min-w-28 text-white"
              variant={'secondary'}
              type="button"
            >
              Update User
            </Button>
          </DialogFooter>
        </DialogContent>
      ) : (
        <DialogContent aria-describedby={'delete modal'} className="sm:max-w-[40rem] text-text">
          <DialogHeader>
            <DialogTitle> Are you sure you want to delete this user?</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            this action cannot be undone
          </DialogDescription>
          <DialogFooter>
            <Button
              className="text-white"
              variant={'destructive'}
              type="button"
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      )}
    </Dialog>
  );
}
