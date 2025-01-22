'use client';
import React from 'react';
import Container from '../_components/Container';
import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';
import UserListTable from '../_components/UserListTable';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import FormControl from '@/components/common/FormControl';

// type Props = {}

export default function Page() {
  return (
    <Container element="section" className="flex flex-col gap-4">
      <div className="flex justify-between items-center text-white">
        <h2>Manage your Teams</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="text-white" variant={'secondary'}>
              <PlusIcon />
              Add User
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[40rem] text-text">
            <DialogHeader>
              <DialogTitle>Add User</DialogTitle>
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
                Create User
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <UserListTable />
    </Container>
  );
}
