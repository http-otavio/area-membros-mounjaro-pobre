import React from 'react';
import { User, Mail, Lock, Camera, Trophy, Calendar, Zap } from 'lucide-react';
import ProgressBar from './ProgressBar';

const ProfileTab: React.FC = () => {
  const [profile, setProfile] = React.useState({
    name: 'Maria Silva',
    email: 'maria@email.com',
    joinDate: '15 Jan, 2024',
    avatar: ''
  });

  const [isEditing, setIsEditing] = React.useState(false);
  const [editForm, setEditForm] = React.useState(profile);

  const handleSave = () => {
    setProfile(editForm);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditForm(profile);
    setIsEditing(false);
  };

  const stats = [
    { label: 'Módulos Completados', value: '1/8', icon: Trophy, color: 'from-yellow-500 to-orange-500' },
    { label: 'Dias no Programa', value: '15', icon: Calendar, color: 'from-red-500 to-pink-500' },
    { label: 'Progresso Geral', value: '62%', icon: Zap, color: 'from-green-500 to-emerald-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <User className="text-red-400 animate-pulse" size={32} />
            <h2 className="text-5xl font-black text-white tracking-tight">
              MEU <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">PERFIL</span>
            </h2>
            <User className="text-red-400 animate-pulse" size={32} />
          </div>
          <p className="text-gray-300 text-xl font-bold">
            Acompanhe seu progresso e gerencie suas <span className="text-yellow-400">informações</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-2 bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 backdrop-blur-sm border border-red-900/30">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-black text-white">INFORMAÇÕES PESSOAIS</h3>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className={`px-6 py-3 rounded-xl font-black text-sm transition-all duration-300 hover:scale-105 ${
                  isEditing 
                    ? 'bg-gray-600 hover:bg-gray-700 text-white' 
                    : 'bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white shadow-lg shadow-red-500/30'
                }`}
              >
                {isEditing ? 'CANCELAR' : 'EDITAR'}
              </button>
            </div>

            <div className="flex items-center space-x-6 mb-8">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                  {profile.avatar ? (
                    <img src={profile.avatar} alt="Avatar" className="w-full h-full rounded-full object-cover" />
                  ) : (
                    <User className="text-white" size={32} />
                  )}
                </div>
                <button className="absolute bottom-0 right-0 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-all duration-300 shadow-lg">
                  <Camera className="text-black" size={16} />
                </button>
              </div>
              <div>
                <h4 className="text-2xl font-black text-white">{profile.name}</h4>
                <p className="text-gray-400 font-medium">{profile.email}</p>
                <p className="text-gray-500 text-sm font-medium">Membro desde {profile.joinDate}</p>
              </div>
            </div>

            {isEditing ? (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-black text-gray-300 mb-2 uppercase tracking-wider">
                    Nome Completo
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                      type="text"
                      value={editForm.name}
                      onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800 text-white rounded-xl border border-gray-600 focus:border-red-500 focus:outline-none font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-black text-gray-300 mb-2 uppercase tracking-wider">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                      type="email"
                      value={editForm.email}
                      onChange={(e) => setEditForm({...editForm, email: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800 text-white rounded-xl border border-gray-600 focus:border-red-500 focus:outline-none font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-black text-gray-300 mb-2 uppercase tracking-wider">
                    Nova Senha
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                      type="password"
                      placeholder="Digite sua nova senha"
                      className="w-full pl-10 pr-4 py-3 bg-gray-800 text-white rounded-xl border border-gray-600 focus:border-red-500 focus:outline-none font-medium"
                    />
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={handleSave}
                    className="flex-1 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white py-3 px-6 rounded-xl font-black transition-all duration-300 hover:scale-105 shadow-lg shadow-red-500/30"
                  >
                    SALVAR ALTERAÇÕES
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-3 px-6 rounded-xl font-black transition-all duration-300 hover:scale-105"
                  >
                    CANCELAR
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center space-x-3 py-4 px-6 bg-gray-800/50 rounded-xl border border-gray-700">
                  <User className="text-red-400" size={20} />
                  <div>
                    <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">Nome</p>
                    <p className="text-white font-bold">{profile.name}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 py-4 px-6 bg-gray-800/50 rounded-xl border border-gray-700">
                  <Mail className="text-red-400" size={20} />
                  <div>
                    <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">Email</p>
                    <p className="text-white font-bold">{profile.email}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Stats Card */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 backdrop-blur-sm border border-red-900/30">
              <h3 className="text-2xl font-black text-white mb-6">ESTATÍSTICAS</h3>
              <div className="space-y-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <Icon className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">{stat.label}</p>
                        <p className="text-white font-black text-lg">{stat.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 backdrop-blur-sm border border-red-900/30">
              <h3 className="text-2xl font-black text-white mb-4">PROGRESSO GERAL</h3>
              <ProgressBar progress={62} />
              <p className="text-sm text-gray-400 mt-3 font-medium">
                Você completou <span className="text-yellow-400 font-bold">62%</span> do programa. Continue assim!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTab;