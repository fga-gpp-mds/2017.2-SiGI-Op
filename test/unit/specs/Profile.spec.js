import Vue from 'vue';
import Profile from '@/components/Profile/Profile';

describe('Profile', () => {
  it('sets correct default data', () => {
    expect(typeof Profile.data).to.equal('function');
    const defaultData = Profile.data();
    expect(defaultData.username).to.equal(undefined);
    expect(defaultData.alert).to.equal(false);
    expect(defaultData.e1).to.equal(true);
    expect(defaultData.e2).to.equal(true);
    expect(defaultData.e3).to.equal(true);
    expect(defaultData.edit).to.equal(false);
    expect(defaultData.currentpassword).to.equal('');
    expect(defaultData.password).to.equal('');
    expect(defaultData.confirmpassword).to.equal('');
  });
  it('has function', () => {
    expect(typeof Profile.methods.post).to.equal('function');
    expect(typeof Profile.methods.clear).to.equal('function');
    expect(typeof Profile.methods.save).to.equal('function');
    expect(typeof Profile.methods.cancel).to.equal('function');
  });
  it('clear all fields', () => {
    expect(typeof Profile.methods.clear).to.equal('function');
    const profile = Profile;
    profile.methods.clear();
    const clearedData = profile.data();
    expect(clearedData.currentpassword).to.equal('');
    expect(clearedData.password).to.equal('');
    expect(clearedData.alert).to.equal(false);
    expect(clearedData.e1).to.equal(true);
    expect(clearedData.e2).to.equal(true);
    expect(clearedData.e3).to.equal(true);
    expect(clearedData.edit).to.equal(false);
    expect(clearedData.currentpassword).to.equal('');
    expect(clearedData.password).to.equal('');
    expect(clearedData.confirmpassword).to.equal('');
  });
  it('when cancel clear all fields', () => {
    expect(typeof Profile.methods.cancel).to.equal('function');
    const profile = Profile;
    profile.methods.cancel();
    const clearedData = profile.data();
    expect(clearedData.currentpassword).to.equal('');
    expect(clearedData.password).to.equal('');
    expect(clearedData.alert).to.equal(false);
    expect(clearedData.e1).to.equal(true);
    expect(clearedData.e2).to.equal(true);
    expect(clearedData.e3).to.equal(true);
    expect(clearedData.edit).to.equal(false);
    expect(clearedData.currentpassword).to.equal('');
    expect(clearedData.password).to.equal('');
    expect(clearedData.confirmpassword).to.equal('');
  });
  it('save fail', () => {
    expect(typeof Profile.methods.save).to.equal('function');
    const profile = Profile;
    profile.methods.save();
    profile.data.password = 'vue';
    const clearedData = profile.data();
    expect(clearedData.currentpassword).to.equal('');
    expect(clearedData.password).to.equal('');
    expect(clearedData.alert).to.equal(false);
    expect(clearedData.e1).to.equal(true);
    expect(clearedData.e2).to.equal(true);
    expect(clearedData.e3).to.equal(true);
    expect(clearedData.edit).to.equal(false);
    expect(clearedData.currentpassword).to.equal('');
    expect(clearedData.password).to.equal('');
    expect(clearedData.confirmpassword).to.equal('');
  });
  it('save sucess', () => {
    expect(typeof Profile.methods.save).to.equal('function');
    const profile = Profile;
    profile.data.password = 'vue';
    profile.data.confirmpassword = 'vue';
    profile.data.currentpassword = 'vue';
    profile.methods.save();
    const clearedData = profile.data();
    expect(clearedData.currentpassword).to.equal('');
    expect(clearedData.password).to.equal('');
    expect(clearedData.alert).to.equal(false);
    expect(clearedData.e1).to.equal(true);
    expect(clearedData.e2).to.equal(true);
    expect(clearedData.e3).to.equal(true);
    expect(clearedData.edit).to.equal(false);
    expect(clearedData.currentpassword).to.equal('');
    expect(clearedData.password).to.equal('');
    expect(clearedData.confirmpassword).to.equal('');
  });
  it('save sucess', () => {
    expect(typeof Profile.methods.save).to.equal('function');
    const vm = new Vue(Profile).$mount();
    vm.save();
    expect(vm.currentpassword).to.equal('');
    expect(vm.password).to.equal('');
    expect(vm.alert).to.equal(true);
    expect(vm.e1).to.equal(true);
    expect(vm.e2).to.equal(true);
    expect(vm.e3).to.equal(true);
    expect(vm.edit).to.equal(false);
    expect(vm.currentpassword).to.equal('');
    expect(vm.password).to.equal('');
    expect(vm.confirmpassword).to.equal('');
  });
});
